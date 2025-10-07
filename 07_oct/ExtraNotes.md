
# 🧾 **HTML Forms Cheat Sheet**

---

## 🧩 **1. Basic Form Structure**

```html
<form action="/submit" method="POST">
  <!-- Form elements go here -->
</form>
```

### **Important Attributes**

| Attribute      | Description                                      | Example              |
| -------------- | ------------------------------------------------ | -------------------- |
| `action`       | URL where form data is sent                      | `action="/register"` |
| `method`       | HTTP method to send data (`GET` or `POST`)       | `method="POST"`      |
| `name`         | Identifier for the form                          | `name="signupForm"`  |
| `id`           | Unique ID for CSS/JS                             | `id="loginForm"`     |


---

## 🏷️ **2. Label Tag**

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

✅ The `for` attribute in `<label>` should match the `id` of the input it describes.
This improves **accessibility** and **clickability**.

---

## 🔡 **3. Input Types**

| Input Type       | Example                                       | Description            |
| ---------------- | --------------------------------------------- | ---------------------- |
| `text`           | `<input type="text">`                         | Single-line text field |
| `password`       | `<input type="password">`                     | Hidden characters      |
| `email`          | `<input type="email">`                        | Must contain `@`       |
| `number`         | `<input type="number">`                       | Numeric input only     |
| `date`           | `<input type="date">`                         | Date picker            |
| `time`           | `<input type="time">`                         | Time selector          |
| `datetime-local` | `<input type="datetime-local">`               | Date + time            |
| `tel`            | `<input type="tel">`                          | Phone number input     |
| `url`            | `<input type="url">`                          | URL format validation  |
| `color`          | `<input type="color">`                        | Color picker           |
| `file`           | `<input type="file">`                         | File upload            |
| `checkbox`       | `<input type="checkbox">`                     | Multi-select toggle    |
| `radio`          | `<input type="radio" name="gender">`          | Single-select options  |
| `range`          | `<input type="range" min="0" max="100">`      | Slider                 |
| `hidden`         | `<input type="hidden" name="id" value="123">` | Invisible data         |

---

## ⚙️ **4. Common Input Attributes**

| Attribute     | Description                       | Example                         |
| ------------- | --------------------------------- | ------------------------------- |
| `name`        | Key used when sending data        | `name="email"`                  |
| `id`          | Unique identifier                 | `id="email"`                    |
| `value`       | Default value                     | `value="John"`                  |
| `placeholder` | Hint text inside input            | `placeholder="Enter your name"` |
| `required`    | Makes input mandatory             | `required`                      |
| `readonly`    | Non-editable field                | `readonly`                      |                    |
| `min` / `max` | Range limits for number/date      | `min="1" max="10"`              |
| `maxlength`   | Limits character count            | `maxlength="20"`                |
| `pattern`     | Regex validation                  | `pattern="[A-Za-z]{3,}"`        |
| `step`        | Step size for number/range        | `step="5"`                      |
| `checked`     | Default checked radio/checkbox    | `checked`                       |
| `multiple`    | Allows multiple file/email inputs | `multiple`                      |

---

## 📋 **5. Select Dropdown**

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">--Select--</option>
  <option value="in">India</option>
  <option value="us">USA</option>
  <option value="uk">UK</option>
</select>
```

✅ Use `<optgroup>` to group related options.

```html
<select>
  <optgroup label="Asia">
    <option>India</option>
    <option>Japan</option>
  </optgroup>
  <optgroup label="Europe">
    <option>Germany</option>
  </optgroup>
</select>
```

---

## ✍️ **6. Textarea (Multi-line Input)**

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="30" placeholder="Type your message..."></textarea>
```

Attributes:

* `rows`, `cols` → size
* `maxlength` → limit text length
* `readonly`, `required`, `placeholder`

---

## 🔘 **7. Buttons**

| Tag                      | Description            | Example                                                      |
| ------------------------ | ---------------------- | ------------------------------------------------------------ |
| `<button>`               | General-purpose button | `<button>Click Me</button>`                                  |
| `<input type="submit">`  | Submits form           | `<input type="submit" value="Submit">`                       |
| `<input type="reset">`   | Resets all inputs      | `<input type="reset" value="Clear">`                         |
| `<button type="button">` | Custom JS button       | `<button type="button" onclick="alert('Hi')">Click</button>` |

---

## 📦 **8. Fieldset & Legend**

Group related inputs together.

```html
<form>
  <fieldset>
    <legend>Personal Info</legend>
    <label>Name:</label>
    <input type="text">
    <label>Email:</label>
    <input type="email">
  </fieldset>
</form>
```

---

## 🧰 **9. Useful Form Attributes (Global)**

| Attribute        | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `enctype`        | Encoding type for file uploads (`multipart/form-data`) |
| `accept-charset` | Character encoding (`UTF-8`)                           |
| `method`         | `GET` (URL parameters) or `POST` (secure body data)    |
| `target`         | `_self`, `_blank`, `_parent`, `_top`                   |

Example for file uploads:

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="resume">
  <button type="submit">Upload</button>
</form>
```

---

## 🧩 **10. Example: Complete Registration Form**

```html
<form action="/register" method="POST" autocomplete="on">
  <fieldset>
    <legend>Registration Form</legend>

    <label for="name">Full Name:</label>
    <input type="text" id="name" name="fullname" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br><br>

    <label>Gender:</label>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female<br><br>

    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="">Select</option>
      <option value="in">India</option>
      <option value="us">USA</option>
    </select><br><br>

    <label for="bio">Bio:</label><br>
    <textarea id="bio" name="bio" rows="3" cols="40" placeholder="Tell us about yourself"></textarea><br><br>

    <button type="submit">Register</button>
    <input type="reset" value="Clear">
  </fieldset>
</form>
```

---


