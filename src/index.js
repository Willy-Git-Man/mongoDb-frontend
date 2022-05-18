
const render = () => {
  const state = {
    questions:
    [{ _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?', link: "", isAnswered:false },
                { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?', link: "", isAnswered:false },
                { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?', link: "", isAnswered:false }]
  }
  const App = document.createElement('div') //{type:div}
  App.innerText = 'Hello World (Now with 100% more Javascript!!'

  const submitQuestion = question => {
    state.questions.push(question)
    generateQuestionsList()
  }

  const deleteQuestion = _id => {
    state.questions = state.questions.filter(question => _id != question._id)
    generateQuestionsList()
  }

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

  const link = document.createElement('input')



  QuestionForm.append(h1, name, content, submit, link)


  QuestionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (content.value === '') return content.placeholder = "You have to submit a question"

    let data = {
      _id: Math.floor(Math.random() * 1000),
      content: content.value.trim(),
      name: name.value.trim(),
      link: link.value.trim(),
      isAnswered: false
    }

    submitQuestion(data);
    name.value = ""
    content.value = ""
    content.placeholder = "Ask Away.."
    link.value = ""

  })

  const Questions = document.createElement('div')




  const generateQuestionsList = () => {
    if (!state.questions.length) return Questions.innerText = "No Questions Yet!"

    state.questions.reverse().map((question, i) => {
      const formattedQuestion = document.createElement('div')
      formattedQuestion.key = i

      const content = document.createElement('h3')
      content.innerText = question.content;

      const name = document.createElement('span')
      name.innerText = question.name;

      const link = document.createElement('a')

      const isAnswered = document.createElement('button')
      isAnswered.innerText = question.isAnswered ? "Answered" : "Will Answered"
      const deleteButton = document.createElement('button')
      deleteButton.innerText = 'Delete'
      deleteButton.onclick = () => deleteQuestion(question._id)

      formattedQuestion.append(content, name, link, isAnswered, deleteButton)

      Questions.appendChild(formattedQuestion);
    })
  }

App.append(QuestionForm, Questions)
  const root = document.getElementById('root')
  root.append(App)
  generateQuestionsList()
}

document.addEventListener('DOMContentLoaded', () => {
  render()
})
