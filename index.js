document.getElementById('email').addEventListener('keyup', function(){
    const imgDiv = document.getElementById('image-chnage-container');
    imgDiv.innerHTML='';
    const div = document.createElement('div');
    div.innerHTML=`
    <img class="mx-auto text-center" src="./image/1st.png" alt="">
    `;
    imgDiv.appendChild(div)
})
document.getElementById('password').addEventListener('keyup', function(){
    const imgDiv = document.getElementById('image-chnage-container');
    imgDiv.innerHTML='';
    const div = document.createElement('div');
    div.innerHTML=`
    <img class="mx-auto text-center" src="./image/hide.gif" alt="">
    `;
    imgDiv.appendChild(div)
})