// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title LeapCred
 * @dev Soulbound reputation system for the LEAP platform
 * CRED is earned through participation, never bought or transferred
 */
contract LeapCred is Ownable {
    
    // CRED balances (soulbound - non-transferable)
    mapping(address => uint256) public cred;
    
    // Profile data
    struct Profile {
        string name;
        string currentJob;
        string creativeDream;
        string timeline;
        bool hasLeaped;
        uint256 createdAt;
    }
    
    mapping(address => Profile) public profiles;
    mapping(address => bool) public hasProfile;
    
    // CRED reward amounts
    uint256 public constant CRED_CREATE_PROFILE = 10;
    uint256 public constant CRED_POST_UPDATE = 5;
    uint256 public constant CRED_GET_TIPPED = 2;
    uint256 public constant CRED_TIP_SOMEONE = 1;
    uint256 public constant CRED_HIT_MILESTONE = 20;
    uint256 public constant CRED_MAKE_THE_LEAP = 100;
    
    // Authorized CRED granters (can be backend, other contracts)
    mapping(address => bool) public credGranters;
    
    // Events
    event ProfileCreated(address indexed user, string name);
    event CredEarned(address indexed user, uint256 amount, string reason);
    event LeapMade(address indexed user);
    event CredGranterUpdated(address indexed granter, bool status);
    
    constructor() Ownable(msg.sender) {}
    
    modifier onlyCredGranter() {
        require(credGranters[msg.sender] || msg.sender == owner(), "Not authorized to grant CRED");
        _;
    }
    
    /**
     * @dev Create a profile and earn initial CRED
     */
    function createProfile(
        string calldata name,
        string calldata currentJob,
        string calldata creativeDream,
        string calldata timeline
    ) external {
        require(!hasProfile[msg.sender], "Profile already exists");
        require(bytes(name).length > 0, "Name required");
        require(bytes(creativeDream).length > 0, "Dream required");
        
        profiles[msg.sender] = Profile({
            name: name,
            currentJob: currentJob,
            creativeDream: creativeDream,
            timeline: timeline,
            hasLeaped: false,
            createdAt: block.timestamp
        });
        
        hasProfile[msg.sender] = true;
        cred[msg.sender] += CRED_CREATE_PROFILE;
        
        emit ProfileCreated(msg.sender, name);
        emit CredEarned(msg.sender, CRED_CREATE_PROFILE, "profile_created");
    }
    
    /**
     * @dev Mark that user has made the leap (quit their job)
     */
    function makeTheLeap() external {
        require(hasProfile[msg.sender], "Create profile first");
        require(!profiles[msg.sender].hasLeaped, "Already leaped");
        
        profiles[msg.sender].hasLeaped = true;
        cred[msg.sender] += CRED_MAKE_THE_LEAP;
        
        emit LeapMade(msg.sender);
        emit CredEarned(msg.sender, CRED_MAKE_THE_LEAP, "made_the_leap");
    }
    
    /**
     * @dev Grant CRED to a user (called by authorized granters)
     */
    function grantCred(address user, uint256 amount, string calldata reason) external onlyCredGranter {
        require(hasProfile[user], "User has no profile");
        cred[user] += amount;
        emit CredEarned(user, amount, reason);
    }
    
    /**
     * @dev Batch grant CRED to multiple users
     */
    function batchGrantCred(
        address[] calldata users, 
        uint256[] calldata amounts,
        string calldata reason
    ) external onlyCredGranter {
        require(users.length == amounts.length, "Array length mismatch");
        for (uint i = 0; i < users.length; i++) {
            if (hasProfile[users[i]]) {
                cred[users[i]] += amounts[i];
                emit CredEarned(users[i], amounts[i], reason);
            }
        }
    }
    
    /**
     * @dev Update CRED granter status
     */
    function setCredGranter(address granter, bool status) external onlyOwner {
        credGranters[granter] = status;
        emit CredGranterUpdated(granter, status);
    }
    
    /**
     * @dev Get user's CRED balance
     */
    function getCredBalance(address user) external view returns (uint256) {
        return cred[user];
    }
    
    /**
     * @dev Check if user has profile
     */
    function userHasProfile(address user) external view returns (bool) {
        return hasProfile[user];
    }
    
    /**
     * @dev Get user's profile
     */
    function getProfile(address user) external view returns (Profile memory) {
        require(hasProfile[user], "No profile");
        return profiles[user];
    }
}
