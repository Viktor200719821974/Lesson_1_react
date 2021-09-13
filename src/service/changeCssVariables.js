
export const changeCssVariables = theme =>{
    const root = document.querySelector(':root');
    // const cssVariables = ['header', 'background'];
    // cssVariables.forEach(element => {
    //     root.style.setProperty(` --theme-default-${element}`, `var(--theme-${theme}-${element})`);
    // })
    root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
    root.style.setProperty('--theme-default-background', `var(--theme-${theme}-background)`);
}
