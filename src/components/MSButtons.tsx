import React from "react";
import './MSButtons.css'
interface MSButtonsProps{
    labels: string[]
    styles: MSButtonStyle[]
    actions: (() => void)[];
}

export enum MSButtonStyle{
    PRIMARY,SECUNDARY,SUCCESS,ERROR
}

export const MSButtons:React.FC<MSButtonsProps> =({labels,styles,actions}) => {

    let buttonClassName = ""

    let gridTemplateColumnsValue = ""
    let containerWith = 0

    for(let c = 0;c < labels.length;c++){
        gridTemplateColumnsValue = gridTemplateColumnsValue + "1fr "
        containerWith = containerWith + 220
    }

    const exampleAction = () => {
        alert("This is an example of a button's action")
    }

    return(
        <div id={"buttons"} style={{gridTemplateColumns: gridTemplateColumnsValue,width:containerWith}}>
            {
                labels.map((b,i) => {

                    switch (styles[i]){
                        case MSButtonStyle.PRIMARY:
                            buttonClassName = "btn btn-outline-primary"
                            break
                        case MSButtonStyle.SECUNDARY:
                            buttonClassName = "btn btn-outline-secondary"
                            break
                        case MSButtonStyle.SUCCESS:
                            buttonClassName = "btn btn-outline-success"
                            break
                        case MSButtonStyle.ERROR:
                            buttonClassName = "btn btn-outline-danger"
                            break
                    }

                    return(
                        <div className={"container"}>
                            <button
                            className={buttonClassName}
                            style={{width:'200px'}}
                            onClick={actions[i]}
                        >{b}</button></div>
                    )
                })
            }
        </div>
    )
}