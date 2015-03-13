# Flux Actions

    git checkout ex8

When a user enters a Item we want to add it to the store
then the store should render it in the list.

    mkdir actions
    touch actons/TodoActions.js

Add TodoActions:

    var AppDispatcher = require('../dispatcher/AppDispatcher');
    var TodoConstants = require('../constants/TodoConstants');

    var TodoActions = {

      create: function(text) {
        
      },

      updateText: function(id, text) {
        AppDispatcher.dispatch({
          actionType: TodoConstants.TODO_UPDATE_TEXT,
          id: id,
          text: text
        });
      },

      toggleComplete: function(todo) {
        var id = todo.id;
        if (todo.complete) {
          AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UNDO_COMPLETE,
            id: id
          });
        } else {
          AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_COMPLETE,
            id: id
          });
        }
      },

      toggleCompleteAll: function() {
        AppDispatcher.dispatch({
          actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        });
      },

      destroy: function(id) {
        AppDispatcher.dispatch({
          actionType: TodoConstants.TODO_DESTROY,
          id: id
        });
      },

      destroyCompleted: function() {
        AppDispatcher.dispatch({
          actionType: TodoConstants.TODO_DESTROY_COMPLETED
        });
      }

    };

    module.exports = TodoActions;

Wire up the TodoAction.create through the Dispatcher and the Header Component to create a todo item in the TodoStore.

Lastly, wire up all the actions on the TodoItem Component.

