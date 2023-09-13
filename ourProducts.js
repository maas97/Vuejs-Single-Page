
// const cardOne = document.querySelector('.card1');
// const cardOneDescription = document.querySelector('.card1Description');
// console.log(cardOne)
// // console.log(cardOneDescription)

// cardOne.addEventListener('mouseover', ()=>{
//     cardOneDescription.style.display = 'block';
//     console.log(cardOneDescription)

// })



const app = Vue.createApp({
    // template: '<h2> Aloha There </h2>'
    // to write data to be shown in the template inside #app 
    data() {
        return{
            isOneDescriptionVisible: false,
            isOneCardCoverVisible: true,
            isTwoDescriptionVisible: false,
            isTwoCardCoverVisible: true,
            isThreeDescriptionVisible: false,
            isThreeCardCoverVisible: true,
            isFourDescriptionVisible: false,
            isFourCardCoverVisible: true,
            content1: "نسعى إلى حلول الويب المبتكرة لتصميم المواقع الإلكترونية بكشل فعال ومتجاوب مع جميع الأجهزة.",
            content2: "تصميم واجهة المستخدم وتجربة المستخدم وإنشاء النماذج الأولية للتحقق من صحة الأفكار ونقل المنتجات الرقيمة إلى السوق بثقة.",
            content3: "تقدم شركة ذكاء الدولية بتقديم خدمات تأجير السيرفرات الخاصة بمواصفات عالية تلبي جميع احتياجات المؤسسات.",
            content4: "تمتع بحماية قوية ضد الاختراقات والمخترقين الذين يحاولون تعطيل أعمالك مع حلول ذكاء للأمن السيبراني."
        }
    },
    // methods i can call inside my vue template to be executed at certain @event or v-on:event ='method'
    methods:{
        showDescriptionOne() {
            this.isOneDescriptionVisible = !this.isOneDescriptionVisible
            this.isOneCardCoverVisible = !this.isOneCardCoverVisible
        }, 
        showCoverOne(){
            this.isOneDescriptionVisible = !this.isOneDescriptionVisible
            this.isOneCardCoverVisible = !this.isOneCardCoverVisible
        },
        showDescriptionTwo() {
            this.isTwoDescriptionVisible = !this.isTwoDescriptionVisible
            this.isTwoCardCoverVisible = !this.isTwoCardCoverVisible
        },
        showCoverTwo(){
            this.isTwoDescriptionVisible = !this.isTwoDescriptionVisible
            this.isTwoCardCoverVisible = !this.isTwoCardCoverVisible
        },
        showDescriptionThree() {
            this.isThreeDescriptionVisible = !this.isThreeDescriptionVisible
            this.isThreeCardCoverVisible = !this.isThreeCardCoverVisible
        },
        showCoverThree(){
            this.isThreeDescriptionVisible = !this.isThreeDescriptionVisible
            this.isThreeCardCoverVisible = !this.isThreeCardCoverVisible
        },
        showDescriptionFour() {
            this.isFourDescriptionVisible = !this.isFourDescriptionVisible
            this.isFourCardCoverVisible = !this.isFourCardCoverVisible
        },
        showCoverFour(){
            this.isFourDescriptionVisible = !this.isFourDescriptionVisible
            this.isFourCardCoverVisible = !this.isFourCardCoverVisible
        }
    }
})

app.mount("#product")