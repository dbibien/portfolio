"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

const LINK = process.env.NEXT_PUBLIC_LINK
const NAME_ID = process.env.NEXT_PUBLIC_NAME_ID
const EMAIL_ID = process.env.NEXT_PUBLIC_EMAIL_ID
const MESSAGE_ID = process.env.NEXT_PUBLIC_MESSAGE_ID

const TextInput = ({ id, label, placeHolder, value, setValue }: { id: string, label: string, placeHolder: string, value: string, setValue: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="mb-6">
      <Label
        htmlFor={id}
        className="text-white/75 text-lg"
      >
        {label}:
      </Label>
      <Input
        type="text"
        id={id}
        name={id}
        placeholder={placeHolder}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-white/75"
      />
    </div>
  )
}

const TextArea = ({ id, label, placeHolder, value, setValue }: { id: string, label: string, placeHolder: string, value: string, setValue: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="mb-8">
      <Label
        htmlFor={id}
        className="text-white/75 text-lg"
      >
        {label}:
      </Label>
      <Textarea
        id={id}
        name={id}
        placeholder={placeHolder}
        rows={8}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-200 text-white/75"
      />
    </div>
  )
}

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()

    const formDataObj = new FormData()
    formDataObj.append(`${NAME_ID}`, name)
    formDataObj.append(`${EMAIL_ID}`, email)
    formDataObj.append(`${MESSAGE_ID}`, message)

    // TODO: are all input fields filled?

    try {
      await fetch(`${LINK}`, {
        method: "POST",
        body: formDataObj,
      })
    } catch (e) {
      console.log("e: ", e)
      setName("")
      setEmail("")
      setMessage("")
      setSuccessMessage("We will be in touch")
    }
  }

  return (
    <div className="mt-4">
      <h1 className="text-center text-white font-semibold text-4xl lg:text-left">
        Let us get in contact
      </h1>

      {successMessage && (
        <div className="mt-4 p-4 bg-green-500/75 text-white/75 text-center text-lg rounded-lg font-semibold lg:w-[50vw] lg:ml-auto lg:mr-auto">{successMessage}</div>
      )}

      <div className="mt-4">
        <form action={LINK} method="POST" onSubmit={onSubmit}>
          <TextInput
            id="entry.486746650"
            label="Name"
            placeHolder="Enter your name"
            value={name}
            setValue={setName}
          />

          <TextInput
            id="entry.507896998"
            label="Email"
            placeHolder="Enter your email address"
            value={email}
            setValue={setEmail}
          />

          <TextArea
            id="entry.580365118"
            label="Message"
            placeHolder="Enter your message"
            value={message}
            setValue={setMessage}
          />

          <Button
            type="submit"
            // onClick={(e) => onSubmit(e)}
            className="w-full text-lg font-semibold bg-orange-400 p-4"
            size="lg"
            disabled={name === "" || email === "" || message === ""}
          >
            Submit
          </Button>
        </form>
      </div>
    </div >
  )
}

export default ContactForm
