import { useState } from "react"

/* ===== Array (JSON Array) ===== */
const genders = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" }
]

const hobbiesList = [
  { label: "Music", value: "Music" },
  { label: "Movies", value: "Movies" },
  { label: "Plastic Model", value: "Plastic Model" }
]

const roles = [
  { label: "General staff", value: "General staff" },
  { label: "Developer", value: "Developer" },
  { label: "System Analyst", value: "System Analyst" }
]

function Register() {
  /* ===== State ===== */
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [gender, setGender] = useState("")
  const [hobbies, setHobbies] = useState([])
  const [role, setRole] = useState("")

  /* ===== Checkbox Function ===== */
  function onHobbiesToggle(event) {
    const value = event.target.value
    const checked = event.target.checked

    if (checked) {
      setHobbies(prev => [...prev, value])
    } else {
      setHobbies(prev => prev.filter(item => item !== value))
    }
  }

  /* ===== JSX ===== */
  return (
    <div>
      <h2>Registration Form</h2>

      <div>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        Firstname:
        <input
          type="text"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />
      </div>

      <div>
        Lastname:
        <input
          type="text"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
      </div>

      <div>
        Gender:
        {genders.map(g => (
          <label key={g.value}>
            <input
              type="radio"
              name="gender"
              value={g.value}
              onChange={e => setGender(e.target.value)}
            />
            {g.label}
          </label>
        ))}
      </div>

      <div>
        Hobbies:
        {hobbiesList.map(h => (
          <label key={h.value}>
            <input
              type="checkbox"
              value={h.value}
              onChange={onHobbiesToggle}
            />
            {h.label}
          </label>
        ))}
      </div>

      <div>
        Apply Role:
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          {roles.map(r => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <hr />

      <h3>Result</h3>
      <p>Username: {username}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Gender: {gender}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default Register
