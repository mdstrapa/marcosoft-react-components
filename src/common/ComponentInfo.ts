interface ComponentInfo {
    componentName: string
    componentDescription: string
    propsNames: string[]
    propsDescriptions: string[]
}

export const MSCardInfo:ComponentInfo = {
    componentName: "<MSCard>",
    componentDescription: "A generic card that can be used for multiple purposes. It features a title, a description and a button to redirect the page to another route. This component takes advantage of Bootstrap styles. It's a requirement to have Bootstrap enabled in the project in order to use this component.",
    propsNames: ["title","description","link"],
    propsDescriptions: ["The title of the card","The description that will be put together right below the title","The link to follow when the button is clicked"]
}

export const MSDynamicTableInfo:ComponentInfo = {
    componentName : "<MSDynamicTable>",
    componentDescription: "A table that can be dynamically rendered  based on the columns and data type of the data source array. It accepts three types of data: links, texts and images. You can use as many instances as you need.",
    propsNames : ["headerColumns","columnsTypes","data"],
    propsDescriptions : ["A list of the names for the Header Row","A list defining the type of each column. Valid values come from ColumnType enum","The data to fill the table"]
}

export const MSFormattedMessageInfo:ComponentInfo = {
    componentName : "<MSFormattedMessage>",
    componentDescription: "A message automatically formatted based on a given style. It allows you to keep an visual integrity all over the application. It is extremely easy to use and very useful.",
    propsNames : ["message","style"],
    propsDescriptions : ["The message to present","The style of the message. Valid values come from MessageStyle enum"]
}
export const MSHorizontalListInfo:ComponentInfo = {
    componentName : "<MSHorizontalList>",
    componentDescription: "A list that can render with or without links. I will render horizontally. This component can be used as a nav bar.",
    propsNames : ["items","links"],
    propsDescriptions : ["The values to create a list","The links associated to each value in the list"]
}
export const MSLoadingInfo:ComponentInfo = {
    componentName : "<MSLoading>",
    componentDescription: "A simple loading component that can be used when the user is waiting for some operation to finish. Optionally a custom message can be added to it.",
    propsNames : ["customMessage"],
    propsDescriptions : ["A custom message to present to the user along with the default behavior. It can be leave empty."]
}
export const MSSimpleListInfo:ComponentInfo = {
    componentName : "<MSSimpleList>",
    componentDescription: "A list that can render with or without links. It will render vertically. This component is very common among applications and super useful.",
    propsNames : ["items","links"],
    propsDescriptions : ["The values to create a list","The links associated to each value in the list"]
}