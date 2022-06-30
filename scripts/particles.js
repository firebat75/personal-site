new JParticles.Line('.red', {
    num: 1,
    color: 'red',
    maxWidth: 70,
    minWidth: 2,
    maxSpeed: 0.2,
    minSpeed: 0.1,
    maxDegree: 170,
    minDegree: 20,
    createOnClick: false,
    numberOfCreations: 3,
    removeOnOverflow: true,
    overflowCompensation: 20,
    reservedLines: 1
});
new JParticles.Line('.yellow', {
    num: 1,
    color: 'yellow',
    maxWidth: 70,
    minWidth: 2,
    maxSpeed: 0.4,
    minSpeed: 0.2,
    maxDegree: 170,
    minDegree: 20,
    createOnClick: false,
    numberOfCreations: 3,
    removeOnOverflow: true,
    overflowCompensation: 20,
    reservedLines: 1
});
new JParticles.Line('.blue', {
    num: 1,
    color: 'blue',
    maxWidth: 70,
    minWidth: 2,
    maxSpeed: 1,
    minSpeed: 0.8,
    maxDegree: 170,
    minDegree: 20,
    createOnClick: false,
    numberOfCreations: 3,
    removeOnOverflow: true,
    overflowCompensation: 20,
    reservedLines: 1
});
new JParticles.Line('.black', {
    num: 1,
    color: 'black',
    maxWidth: 70,
    minWidth: 2,
    maxSpeed: 1,
    minSpeed: 0.1,
    maxDegree: 170,
    minDegree: 20,
    createOnClick: false,
    numberOfCreations: 3,
    removeOnOverflow: true,
    overflowCompensation: 20,
    reservedLines: 1
});
new JParticles.Line('.misc', {
    num: 3,
    color: ['red', 'yellow', 'blue', 'black'],
    maxWidth: 70,
    minWidth: 2,
    maxSpeed: 0.3,
    minSpeed: 0.1,
    maxDegree: 170,
    minDegree: 20,
    createOnClick: true,
    numberOfCreations: 1,
    removeOnOverflow: true,
    overflowCompensation: 20,
    reservedLines: 7
});