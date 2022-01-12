//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("TOKEN_NAME", "TOKEN_SYMBOL") {
        _mint(msg.sender, initialSupply);
    }
}
