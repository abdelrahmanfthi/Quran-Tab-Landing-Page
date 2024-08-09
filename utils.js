export const clickLabelElement = (item)=>{
    item.addEventListener('keydown',(e)=>{
        if(e.key==='Enter'){
            item.click();
        };
    })};

export const observeElements = (sectionElements)=>{
    const options = {threshold:1};
    const callback = (entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("in-veiw")
            }
        });
    }
    const observer = new IntersectionObserver(callback,options)
    sectionElements.forEach(element=>observer.observe(element));
};

