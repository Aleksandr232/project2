const menu =(menuSelector, burgerSelector)=>{
    const menuElem=document.querySelector(menuSelector),
            burgerElem=document.querySelector(burgerSelector);

            menuElem.style.display='none';

            burgerElem.addEventListener('click', ()=>{
                if(menuElem.style.display=='block' && window.screen.availWidth<993){
                    menuElem.style.display='none';
                }else{
                    menuElem.style.display='block';
                    
                }
                
            });
             
            
};

export default menu;