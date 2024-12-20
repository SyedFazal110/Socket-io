import io from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js"

const socket = io('http://localhost:3000');

socket.on('connect' , () => {
    console.log('connected to the server');
})


const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


const arr = [];









