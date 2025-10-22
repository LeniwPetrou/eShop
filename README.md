# Eshop

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Main Page

The app has a **welcome page** and a **nav bar created by Angular Material**. The **2 basic pages** are: **Products and Cart** which are being described later. 

![homePage](https://github.com/user-attachments/assets/fc8b506f-948d-4902-a4c5-785a93d4e47c)


## Products

In Products, user can select the quantity of a product and add it in the cart. There is a list with **all the products by default** and also user can select a specific category. When user selects a **category** then the initial list is being filtered and are being displayed only the **filtered products**. 

![products](https://github.com/user-attachments/assets/dd6360e8-3fc8-4300-91eb-ecea01601302)

When the **quantity** of a product is **0 then the button is disabled**. When user **changes the quantity of a product** then the **button is being enabled**.

![productsAdd](https://github.com/user-attachments/assets/4244f8ca-32ed-4694-b779-d6e0b3a77501)


## Cart

When a user **adds a product** to the cart then the product with **some details are being desplayed in the cart**.

![cart](https://github.com/user-attachments/assets/b4377e05-2d68-4480-8d10-02de0b997d19)

User can **delete a product from the cart**.
In the end, the **total amount is being calculated**.

When the **cart is empty** then the **related message is being displayed** and the user can continue shopping by pushing the related button!

![emptyCart](https://github.com/user-attachments/assets/48da7e00-73ba-40c2-8a95-dd791ee861ef)

## Technologies
 - Angular
 - Signals
 - NgRx
 - Angular Material 



