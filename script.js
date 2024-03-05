
const faq_q = document.querySelectorAll(".faqques");

faq_q.forEach(btn =>{
    btn.addEventListener('click', openans);
    function openans(){
        const test= this.nextElementSibling
        const plusicon= this.querySelector('.plus')
        const minusicon= this.querySelector('.minus')
        this.classList.toggle('active');


        if (test.classList.contains('answeroff')){
            test.classList.replace('answeroff', 'answeron');
                    plusicon.style.display ='none';
                    minusicon.style.display ='block';
                }else{
                    test.classList.replace('answeron', 'answeroff');
                     plusicon.style.display ='block';
                    minusicon.style.display ='none';
                }
    }
   
})
