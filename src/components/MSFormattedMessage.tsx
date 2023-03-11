interface MSFormattedMessageProps {
    message: string
    style: MessageStyle
}

export enum MessageStyle {
    INFO= 'info',
    WARNING = 'warning',
    SUCCESS = 'success',
    DANGER = 'danger'
}

export const MSFormatteMessage:React.FC<MSFormattedMessageProps> = ({message,style}) => {
    
    let messageStyle = "";

    switch (style) {
        case MessageStyle.INFO:
            messageStyle = "alert alert-info";
            break
        case MessageStyle.WARNING:
            messageStyle = "alert alert-warning";
            break
        case MessageStyle.SUCCESS:
            messageStyle = "alert alert-success";
            break
        case MessageStyle.DANGER:
            messageStyle = "alert alert-danger";
            break
        default:
            messageStyle = ""
    }

    return(
        <div className={messageStyle}>
            {message}
        </div>
    )
}