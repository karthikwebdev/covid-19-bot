const btn = document.querySelector('.talk');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const talk = "don't talk too much i may enter your mouth"

function readout(msg){
    console.log(msg);
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    if(msg.includes('care')){
        speech.text  = 'take care of yourselves by using masks, i came here to stop all the changes in atmosphere'
    }
    else if(msg.includes('happy')){
        speech.text ="do you feel happy talking to me"   
    }
    else if(msg.includes('yes')){
        speech.text ="thats so kind of you"   
    }
    else if(msg.includes('China')){
        speech.text = 'i am leaving china and started other countries'
    }
    else if(msg.includes('what is your age')  || msg.includes('how old are you')){
        speech.text = '3 months'
    }
    else if(msg.includes('name')){
        speech.text = 'my name is corona virus'
    }
    else if(msg.includes('Italy')){
        speech.text = 'Italy should take care of me'
    }
    else if(msg.includes('Korea')){
        speech.text = 'Korea should take care.'
    }
    else if(msg.includes('package') ||msg.includes('from China') ){
        speech.text = 'you can take them'
    }
    else if(msg.includes('heat') || msg.includes('sun')){
        speech.text = 'i can not live in heat'
    }
    else if(msg.includes('everyone die')){
    speech.text= 'death rate is only 2 persent of effected people'
    }
    else if(msg.includes('why')){
        speech.text = 'I make people care about health'
    }
    else if(msg.includes('more holidays')){
        speech.text = 'Who will write your exams'
    }
    else if(msg.includes('when') && msg.includes('born')){
        speech.text  = 'google says better answer than me'
    }
    else if(msg.includes('when') && msg.includes('leave')){
        speech.text  = 'on february 30'
    }
    else if(msg.includes('holidays')){
        speech.text  = 'enjoy your holidays at home.'
    }
    else if(msg.includes('help')){
        speech.text  = 'i can not help you right now'
    }    
    else if(msg.includes('talk')){
         speech.text = talk;
    }
    else if(msg.includes('who') && msg.includes('name')){
        speech.text = 'go and ask the scientist who kept it. not me'
    }
    else if(msg.includes('when') && msg.includes('me')){
        speech.text = 'coming soon'
    }
    else if(msg.includes('tinnava')){
        speech.text = 'i am not srujana to ask me that. anyway nak nak nak odhu'
    }
    else if(msg.includes('what is')){
        speech.text = 'i am not google to say that'
    }
    else if(msg.includes('love')){
        speech.text = 'please stop mixing pulihora'
    }
    else if(msg.includes('kill') || msg.includes('deaths')  || msg.includes('infect')){
        speech.text = 'I killed more than 12000 people,lakhs of people were infected, In future i may even spread more'
    }
    else if(msg.includes('symptoms')){
        speech.text = 'cold,caugh,lungs problem are some of my stmptoms'
    }
    else if(msg.includes('go away') || msg.includes('leave') || msg.includes('please')){
        speech.text = 'I will go away once everything in this world gets fine'
    }
    else if(msg.includes('ask me')){
        speech.text = 'how old are you?'
    }
    else if(msg.includes('history')){
        speech.text = 'some humans ate raw meat and bats in december 2019'
    }
    else if(msg.includes('affect'))
    {
        speech.text =  "i don't effect you as you are so kind to me"
    }
    else if(msg.includes('nice')){
        speech.text = 'I kill people, how can you call me nice?'
    }
    else if(msg.includes('who sent you')){
        speech.text = 'no one sent me. some people carried me from china'
    }
    else if(msg.includes('sorry')){
        speech.text ='i feel sorry for killing people but its my work'
    }
    else if(msg.includes('want')){
        speech.text ='i want people to have healthy habits and keep world clean'
    }
    else if(msg.includes('I am') || msg.includes('years old')){
        speech.text ='thank you for sharing'
    }
    else if(msg.includes('India')){
        speech.text ="indian people are so kind, i don't affect them"        
    }
    else if(msg.includes('love')){
        speech.text ="come lets kill someone"   
    }
    else if(msg.includes('speak')){
        speech.text ="Be careful while you speak i can easily enter you"   
    }
    else if(msg.includes('can you')){
        speech.text ="i can only kill people and make this world clean"   
    }
    else if(msg.includes('mad') || msg.includes('mental') ){
        speech.text ="yes, same like you"   
    }
    else if(msg.includes('live')){
        speech.text ="I Live everywhere"   
    }
    else if(msg.includes('thank you')){
        speech.text ="hope we meet soon"   
    }
    else{
        speech.text ="i can not get you"   
    }
    window.speechSynthesis.speak(speech)
}

recognition.start();
recognition.onstart = ()=>{
    console.log('voice activated');
}


recognition.onresult = (e)=>{
    readout(e.results[0][0].transcript)
    setTimeout(() => {
    recognition.start();    
    }, 1500);
}

btn.addEventListener('click',()=>{
recognition.start();
})

