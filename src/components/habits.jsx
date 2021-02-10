import React  from 'react';
import Habit from './habit';
import Habitinput from './habitinput';
import Reset from './reset';


const Habits = (props) => {
    return (
    <>    

        <Habitinput onAdd={props.onAdd}/>
        <ul>
        {props.habits.map((habit)=>(
                <Habit
                habit={habit}
                key={habit.id}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
                onDelete={props.onDelete}
                />
    ))}
        </ul>
        <Reset onReset={props.onReset}/>
    </>
    );    
}

export default Habits;