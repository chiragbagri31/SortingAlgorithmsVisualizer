async function insertion()
{
    const ele = document.querySelectorAll(".bar");
    
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++)
    {
        if(hasPressedStop==true)
        {
            return;
        }
        
        let j = i - 1;
        let temp = ele[i].style.height;
        ele[i].style.background = 'cyan';

        await delayTime(delay);
        if(hasPressedStop==true)
        {
            return;
        }

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(temp)))
        {
            if(hasPressedStop==true)
            {
                return;
            }
            ele[j].style.background = 'cyan';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await delayTime(delay);
            if(hasPressedStop==true)
            {
                return;
            }
            for(let k = i; k >= 0; k--)
            {
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = temp;
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function()
{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await insertion();
    if(hasPressedStop==true)
    {
        disableSpeedSlider();
    } 
    else 
    {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
