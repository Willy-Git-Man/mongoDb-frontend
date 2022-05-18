const render = () => {
  const App = document.createElement('div') //{type:div}
  App.innerText = 'Hello World (Now with 100% more Javascript!!'

  const QuestionForm = document.createElement('form')
  const h1 = document.createElement('h1')
  h1.innerText = "Ask a Question"

  const name = document.createElement('input')
  name.name = 'name'
  name.type = 'text'
  name.placeholder = 'Name'

  const content = document.createElement('textarea')
  content.rows = 3
  content.name = 'content'
  content.type = 'text'
  content.placeholder = "Ask away..."
  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.innerText = "Submit"



  QuestionForm.append(h1, name,content, submit)

  const Questions = document.createElement('div')

  const generateQuestionsList = () => {
    if (!state.questions.length) return Questions.innerText = "No Questions Yet!"
  }


  const root = document.getElementById('root')
  root.append(App)
}

document.addEventListener('DOMContentLoaded', () => {
  render()
})
