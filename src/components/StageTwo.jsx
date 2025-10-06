import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

const StageTwo=() => {
    const context = useContext(MyContext);
    return <>
    <div className="result_wrapper"><h3>the loser is</h3>{context.result} 
        </div> 
        <div className="action_button" onClick={()=> context.resetGame()}
            >Start over
            </div>
            <div className="action_button btn_2" onClick={()=> context.generateLoser()}>
                Get New Loser
            </div>
        </>;
   };
   export default StageTwo;