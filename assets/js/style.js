document.addEventListener('DOMContentLoaded',()=>{
const removeClose = ()=>{
    const closetop=document.querySelector('.close-top-header'); 
    // console.log(closetop);
    const topheader=document.querySelector('.top-header');
    closetop.addEventListener('click',()=>{
        topheader.remove();
    })
}
removeClose();

// tab menu main
const tabMenumain=()=>{   
    const mnMain=document.querySelectorAll('.menu-main');
    const btnMenu=document.querySelectorAll('.button-menu button');
    btnMenu.forEach((button,index)=>{
        button.addEventListener('click',()=>{
            // xoa het active cua button hien tai

            // xoa het active class active menu main hien tai
            button.classList.remove('active');
            mnMain.forEach((e)=>{
                    e.classList.remove('active');
            })

            // them active vao khi bam button
                button.classList.add('active');
                // them active vao menu voi gia tri button da bam
                mnMain[index].classList.add('active');
        })
    })   
}
tabMenumain();


// tab menu hotDeal
const tabHotDeal=()=>{

    const wrapButton=document.querySelectorAll('.wrap-button button');
    const contenTab=document.querySelectorAll('.content-tabs');
 
    wrapButton.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            item.classList.remove('active');
            wrapButton.forEach((e)=>{
                e.classList.remove('active');
            })
            
            wrapButton.classList.add('active');
            contenTab[index].classList.add('active');
        })
    })
}
tabHotDeal();

// coundown : dat thoi gian
const countDown =()=>{
    // ngay het chuong trinh voi 1/1/1970
    let counDownDate=new Date("Jan 5, 2030 15:37:25").getTime();
    // console.log(counDownDate); //tinh tu ngay 1-1-1970

    let timeFn=setInterval(()=>{
        // ngay hien tai so voi 1/1/1970
        let now=new Date().getTime(); 

        // khoang thoi gian tu ngay chuong trinh dien ra toi ngay hien tai
        let distance=counDownDate - now;

        // ngay thang nam va phut con  lai
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // hien thi ra man hinh
        document.querySelector('.hours').innerHTML=hours;
        document.querySelector('.minutes').innerHTML=minutes;
        document.querySelector('.second').innerHTML=seconds;

        // het thoi gian 
        if(distance<0){
            clearInterval(timeFn);
        }
    },1000);
}
countDown();
});





