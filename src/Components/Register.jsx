import { useState } from "react"
import './Register.css'
export const Register = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [roomtype, setRoomtype] = useState("")
  const [noofguests, setNoofguests] = useState("")
  const [guests, setGuests] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleSubmit = () => {
    if (!name || !phone|| !address|| !roomtype|| !noofguests ) return

    if (editIndex !== null) {
      // UPDATE
      const updatedGuests = [...guests]
      updatedGuests[editIndex] = { name, phone,address,roomtype,noofguests }
      setGuests(updatedGuests)
      setEditIndex(null)
    } else {
      // ADD
      setGuests([...guests, { name,phone,address,roomtype,noofguests }])
    }

    setName("")
    setPhone("")
    setAddress("")
    setRoomtype("")
    setNoofguests("")
  }

  const handleDelete = (index) => {
    setGuests(guests.filter((_, i) => i !== index))
  }

  const handleEdit = (index) => {
    const gue = guests[index]
    setName(gue.name)
    setPhone(gue.phone)
    setAddress(gue.address)
    setRoomtype(gue.roomtype)
    setNoofguests(gue.noofguests)
    setEditIndex(index)
  }

  return (
    <div className="register">
      <center>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>Phone number:</td>
            <td>
              <input type="number" value={phone} placeholder="Enter phone number" onChange={(e) => setPhone(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              <input type="text" value={address} placeholder="Enter address" onChange={(e) => setAddress(e.target.value)}/>
            </td>
          </tr>
            <tr>
            <td>Room type:</td>
            <td>
              <input type="text" value={roomtype} placeholder="Enter room type Ac or non-Ac" onChange={(e) => setRoomtype(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>Number of guests:</td>
            <td>
              <input type="number" value={noofguests} placeholder="Enter number of guests" onChange={(e) => setNoofguests(e.target.value)}/>
            </td>
          </tr>
          <tr></tr>
            <td></td>
            <td>
              <button onClick={handleSubmit}>
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </td>
            <tr>
          </tr>
        </tbody>
      </table>
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Room type</th>
            <th>Number of guests</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((gue, index) => (
            <tr key={index}>
              <td>{gue.name}</td>
              <td>{gue.phone}</td>
              <td>{gue.address}</td>
              <td>{gue.roomtype}</td>
              <td>{gue.noofguests}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  )
}

