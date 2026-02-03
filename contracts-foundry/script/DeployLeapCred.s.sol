// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/LeapCred.sol";

contract DeployLeapCred is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        LeapCred leapCred = new LeapCred();
        
        console.log("LeapCred deployed at:", address(leapCred));
        
        vm.stopBroadcast();
    }
}
