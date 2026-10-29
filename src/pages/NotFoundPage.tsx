import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page-content">
      <h1>Page not found</h1>
      <p>
        <Link to="/">Return to the home page</Link>
      </p>
    </section>
  )
}

export default NotFoundPage
