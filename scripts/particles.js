new JParticles.Line('.background', {
    num: 7,
    color: ['red', 'red', 'yellow', 'yellow', 'blue', 'blue', 'black'],
    maxWidth: 70,
    minWidth: 2,
    maxSpeed: 0.8,
    minSpeed: 0.1,
    maxDegree: 170,
    minDegree: 20,
    createOnClick: true,
    numberOfCreations: 1,
    removeOnOverflow: true,
    overflowCompensation: 20,
    reservedLines: 7
});