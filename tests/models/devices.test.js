const devices = require('../../src/models/devices')
const express = require('express')
const samplePublicKey = "GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB"
const samplePrivateKey = "SBREE5AANGK52MCHVZYYRRHXFT2KPIWWOU32WVARFQZBUOHE5ZOQI7FG"

test('getAll returns an object', () => {
    expect(devices.getAll()).toEqual({})
})

test('add throws an error when no deviceid is given', () => {
    expect(() => {devices.add("")}).toThrow();
})

test('add returns a new hash when addig a device', () => {
    var deviceId = devices.add("12345");
    expect(deviceId).toMatch(/^[a-z]+-[a-z]+-[a-z]+$/)
})

test('add returns the same hash for the same device', () => {
    var device1 = devices.add("1234");
    var device2 = devices.add("1234");
    expect(device1).toEqual(device2);
})

test('add returns a different hash every time a device is added', () => {
    var device1 = devices.add("1234");
    var device2 = devices.add("4321");
    expect(device1).not.toEqual(device2);
})

test('getAll returns a device that has been added before', () => {
    var device1 = devices.add("12345");
    var allDevices = devices.getAll();
    expect(allDevices["12345"]).toEqual({
        "key":device1,
        "chip":"12345",
        "wallet":""
    });
})

test('setAddress does not allow invalid public address to be set', () => {
    var device1 = devices.add("12345");
    expect(() => {devices.setAddress("12345", "none")}).toThrow();
    expect(() => {devices.setAddress("12345")}).toThrow();
})

test('setAddress does not allow private key to be set', () => {
    var device1 = devices.add("12345");
    expect(() => {devices.setAddress("12345", samplePrivateKey)}).toThrow();
})

test('setAddress does allow public address to be set', () => {
    var device1 = devices.add("12345");
    expect(() => {devices.setAddress("12345", samplePublicKey)}).not.toThrow();
})

test('getAddress returns the right address', () => {
    var device1 = devices.add("12345")
    devices.setAddress("12345", samplePublicKey)
    expect(devices.getAddress("12345")).toEqual(samplePublicKey)
})

test('getAddress throws when no address has been set', () => {
    var device1 = devices.add("54321")
    expect(() => {devices.getAddress("54321")}).toThrow()
})