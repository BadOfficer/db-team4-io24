# Тестування працездатності системи

## Запуск сервера
![](./images/start.png)

## Створення користувача (POST /users/create)
![](./images/add-user.png)

## Створення користувача (POST /users/create | Bad Request)
![](./images/create-user-error.png)

## Отримання даних користувача (GET /users/:id)
![](./images/get-user.png)

## Отримання даних користувача (GET /users/:id | Not Found)
![](./images/get-user-error.png)

## Оновлення даних користувача (PUTCH /users/update/:id | Без зміни пароля)
![](./images/update-user-without-password.png)

## Оновлення даних користувача (PUTCH /users/update/:id | Зі зміною пароля)
![](./images/user-update-wih-password.png)

## Оновлення даних користувача (PUTCH /users/update/:id | Not Found)
![](./images/update-user-error.png)

## Оновлення даних користувача на існуючий username(PUTCH /users/update/:id | Bad Request)
![](./images/update-user-error-email.png)

## Оновлення даних користувача з не підтвердженим паролем(PUTCH /users/update/:id | Bad Request)
![](./images/update-user-password-error.png)

## Видалення користувача(DELETE /users/delete/:id)
![](./images/delete-user.png)

## Видалення користувача(DELETE /users/delete/:id | Not Found)
![](./images/delete-user-error.png)

## Створення проєкта (POST /projects/create/:userID)
![](./images/create-project.png)

## Отримання інформації про проєкт (GET /projects/:projectID)
![](./images/get-project.png)

## Отримання інформації про проєкт (GET /projects/:projectID | Not Found)
![](./images/project-get-error.png)

## Оновлення інформації про проєкт (PUTCH /projects/update/:projectID)
![](./images/update-project.png)

## Оновлення інформації про проєкт (PUTCH /projects/update/:projectID | Not Found)
![](./images/update-project-error.png)

## Видалення проєкту (DELETE /projects/delete/:projectID)
![](./images/delete-project.png)

## Видалення проєкту (DELETE /projects/delete/:projectID | Not Found)
![](./images/delete-project-error.png)

## Створення завдання (POST /tasks/create/:projectID)
![](./images/create-task.png)

## Отримання інфоромації про завдання (GET /tasks/:taskID)
![](./images/get-task.png)

## Отримання інфоромації про завдання (GET /tasks/:taskID | Not Found)
![](./images/get-task-error.png)

## Оновлення інфоромації про завдання (PUTCH /tasks/update/:taskID)
![](./images/update-task.png)

## Оновлення інфоромації про завдання (PUTCH /tasks/update/:taskID | Not Found)
![](./images/update-task-error.png)

## Видалення завдання (DELETE /tasks/delete/:taskID)
![](./images/delete-task.png)

## Видалення завдання (DELETE /tasks/delete/:taskID | Not Found)
![](./images/delete-task-error.png)