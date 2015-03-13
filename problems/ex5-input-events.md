# Exercise 5

    git checkout ex5

Lets move to ex5:

    git checkout ex5

In this exercise, we want to setup the events in the TodoInputText component.

* _onChange
* _onKeyDown
* _save

_onKeyDown - if the KEY == ENTER then we want to call this._save()
_onChange - we want to setState with the target value of the input.
_save - we want to call the props.onSave event passing the state.value and then clear the value.