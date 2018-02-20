const devices = require('../../src/models/devices')
const express = require('express')
const samplePublicKey = "GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB"
const samplePrivateKey = "SBREE5AANGK52MCHVZYYRRHXFT2KPIWWOU32WVARFQZBUOHE5ZOQI7FG"

test('getAll returns an array', () => {
    expect(devices.getAll()).toBeInstanceOf(Array)
})

test('add returns a new hash when addig a device', () => {
    var deviceId = devices.add();
    expect(deviceId).toMatch(/^[a-z]+-[a-z]+-[a-z]+$/)
})

test('add returns a different hash every time a device is added', () => {
    var device1 = devices.add();
    var device2 = devices.add();
    expect(device1).not.toEqual(device2);
})

test('getAll returns a device that has been added before', () => {
    var device1 = devices.add();
    var allDevices = devices.getAll();
    expect(allDevices).toContain(device1);
})

test('setAddress does not allow invalid public address to be set', () => {
    var device1 = devices.add();
    expect(() => {devices.setAddress(device1, "none")}).toThrow();
    expect(() => {devices.setAddress(device1)}).toThrow();
})

test('setAddress does not allow private key to be set', () => {
    var device1 = devices.add();
    expect(() => {devices.setAddress(device1, samplePrivateKey)}).toThrow();
})

test('setAddress does allow public address to be set', () => {
    var device1 = devices.add();
    expect(() => {devices.setAddress(device1, samplePublicKey)}).not.toThrow();
})

test('getAddress returns the right address', () => {
    var device1 = devices.add()
    devices.setAddress(device1, samplePublicKey)
    expect(devices.getAddress(device1)).toEqual(samplePublicKey)
})

test('getAddress throws when no address has been set', () => {
    var device1 = devices.add()
    expect(() => {devices.getAddress(device1)}).toThrow()
})