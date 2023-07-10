# Astro Starter Kit: Basics

# What is OneLook?

It is a link unifier that emerges as an open source and self-hosted alternative to tools like Linktree, ContactInBio, Linkpop, Campsite and Bio.Link.

The links are organized in the form of cards that have a high level of customization.

It also has a component that is a payment method organizer.

In the presentation of the page you will find a profile image, a banner, a name, a brief description, your main social networks and the various labels such as occupation, phone, email, birthday, location, link to a website, among others.

Stack: **Astro, TailwindCSS and daisyUI**

## Description

The profile information must be configured in the **user-content.json** file. To add the components you only have to work in the file **index.astro**

**Divider** will divide the content into sections and will contain the **title** property, **Subdivider** will arrange the content in a cell of a column vertically.

The icons that are displayed in the components must be chosen in [Iconify](https://icon-sets.iconify.design/)

**Available Components**
- BigImageCard
- CarouselCards
- CollapseCard
- HorizontalCard
- IconButton
- ImageCard
- SimpleButton
- SimpleCard
- SimpleSocialCard
- TextCard
- YoutubeCard

The **PayOptions** component is configured within the **user-content.json** file.

All payment options must follow the following structure:

```
{
    "id": "btc",
    "name": "Bitcoin",
    "content": "bitcoin address",
}
```

The **id** property is very important, it must always be equal to one of the allowed options.  

In **name** you are free to choose what to put to identify the payment method. Within **content** must go the address or payment link.  

**Available payment options (id):**

- PayPal (paypal)
- Mastercard (mastercard)
- American Express (amex)
- VISA (visa)
- Zinli Card (zinli)
- Cash App (cashapp)
- Zelle (zelle)
- QvaPay (qvapay)
- A card (card)
- Bitcoin (btc)
- Bitcoin LN (btcln)
- Ethereum (eth)
- Litecoin (ltc)
- BNB (bnb)
- USDT (usdt)
- BUSD (busd)
- TRX (trx)
- Dash (dash)
- Ton (ton)
- Solana (solana)
- Doge (doge)
- Matic Polygon (matic)  
- Bitcoin Cash (bch)
- Hive (hive)
- Zcash (zec)

If you want to add another **PayOptions** component just add inside **user-content.json** another property with the same **payOptions** structure.

## Contributions

Feel free to make any request and change request