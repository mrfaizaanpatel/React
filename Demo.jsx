import React from "react";
class Demo extends React.Component
{
   render()
   {
      console.log(this.props)
      return(
        <div>
            <h1>Class Based Component</h1>
            <p>{this.props.message}</p>
            <p>{this.props.year}</p>

        </div>
      );
   }
}
export default Demo;
// Class Based Component