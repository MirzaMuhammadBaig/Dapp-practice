// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BoxV2 {
    uint256 private _value;
//0xCd98476DF9f851F6dDc8C7Ac2141ed1E94Cc5aF5
//0x05d7e6A2544D7500887C153188bAF520b1c39103
    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }

    function increment() public{
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}