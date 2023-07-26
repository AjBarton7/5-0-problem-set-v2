const getMainHeadingText = () => {
  const mainHeading = document.querySelector('#main-heading')
  console.log(mainHeading.textContent)
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll('.main-text')
  let array = [...mainText]
  let arr = []
  arr.push(mainText[0].textContent, mainText[1].textContent, mainText[2].textContent)
  console.log(arr.join(','))
};

const setSubtitleText = () => {
  const h2 = document.querySelector('#subtitle');
  h2.textContent = 'This is a subtitle!'
};

const modifyDivClassList = () => {
  let modifyDivClasses = document.getElementById('modify-classes')
  modifyDivClasses.classList.remove('bad-class')
  modifyDivClasses.classList.add('new-class')
};

const addH2 = () => {
  const newH2 = document.createElement('h2')
  newH2.id = 'h2-test'
  newH2.textContent = 'Another one!'
  
  document.body.appendChild(newH2)
};

const removeOldInfo = () => {
  const oldInfo = document.querySelector('#old-info')
  if (oldInfo){
    oldInfo.remove()
  }
};

const makeAlphabet = () => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let alpha = document.getElementById('alphabet')
  let num = alpha.getAttribute('data-num-letters')
  for (let i = 0; i < num ; i++){
    const newLi = document.createElement('li')
    newLi.textContent = `${str[i]} is letter #${i + 1} in the alphabet`
    alpha.appendChild(newLi)
  }
 
};

const makeBio = () => {
  const bioContent = `
    <h2 id="bio-heading">About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id="hobby-heading">My Hobbies</h3>
    <ul>
      <li>Running</li>
      <li>Reading</li>
      <li>Writing</li>
    </ul>`

const myBioDiv = document.querySelector('#my-bio')
myBioDiv.innerHTML = bioContent
};

const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

main();
