//first triangle
const tri1 = document.getElementById('triangle-1');
const tri1Cont = document.querySelector('.triangle-1');

tri1Cont.addEventListener('mousemove', (event) => 
{
    const containerRect = tri1Cont.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const rotation = angle * (180 / Math.PI);

    tri1.style.transform = `rotate(${rotation}deg)`;
});

//second triangle
const tri2 = document.getElementById('triangle-2');
const tri2Cont = document.querySelector('.triangle-2');

tri2Cont.addEventListener('mousemove', (event) => 
{
    const containerRect = tri2Cont.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const rotation = angle * (180 / Math.PI);

    tri2.style.transform = `rotate(${rotation}deg)`;
});

//third triangle
const tri3 = document.getElementById('triangle-3');
const tri3Cont = document.querySelector('.triangle-3');

tri3Cont.addEventListener('mousemove', (event) => 
{
    const containerRect = tri3Cont.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const rotation = angle * (180 / Math.PI);

    tri3.style.transform = `rotate(${rotation}deg)`;
});


//fourth triangle
const tri4 = document.getElementById('triangle-4');
const tri4Cont = document.querySelector('.triangle-4');

tri4Cont.addEventListener('mousemove', (event) => 
{
    const containerRect = tri4Cont.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const rotation = angle * (180 / Math.PI);

    tri4.style.transform = `rotate(${rotation}deg)`;
});

