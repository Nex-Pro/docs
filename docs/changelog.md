# Changelog

## 0.6.0 - March 28, 2020

-   Updated Tivoli to **Qt 5.14.1**!
    -   **Web entities work perfectly** now as they're using updated **Chrome version 77**
    -   **All video and audio codecs work now** so you can watch Twitch with your friends
    -   Overall speed performance from almost a year's worth of patches
        <br><br>
-   Fixed bug where **entity animations** weren't playing
-   You can **tilt your camera now when loading** a world
-   Worlds load properly now if you have a **slow internet connection**
-   Web entities aren't "mobile devices" anymore when visiting websites (user agent)
    <br><br>
-   **Logging in with Google** works again on the launcher
-   For people with **VC redist** problems, you can launch Tivoli without installing anything

## 0.5.0 - March 11, 2020

-   Tivoli interface will **close much faster**
-   Setting **blendshapes on model entities** are supported
-   **Experimental** new **hand laser redesign**
-   Reactivated **secure microphone and camera permissions** for web entities
-   **Secondary camera** uses **proper light and shadow rendering** again
-   **Experimental loading content indicator redesign** which will be changed
    <br><br>
-   Several **zone culling and static entities** bug fixes
-   Several **static entities** bug fixes including when in create mode
-   Fixed crashes on **audio output device change**

## 0.4.1 - February 18, 2020

-   **Fixed disable VR button** in launcher
-   **Default settings for new users** have been updated
-   Moved launcher developer settings
-   Prettier launcher background

## 0.4.0 - February 12, 2020

-   **Features and improvements**

    -   **Interface**

        -   Added **Entity Priority** which should help creators determine what should be static or dynamic. It makes **frame rates ridiculously higher!**
        -   <strike>You can **scale entities with your hands** when in VR</strike>
        -   **Flight controls** have been updated to feel nicer
        -   Entities are **simulated at closer distance** so animations don't look laggy
        -   **Edit tools** should feel more responsive now
        -   You can load **serverless json worlds from HTTP(S)** links now

    -   **Launcher**

        -   You can now view the **changelog** from a tab

    -   **Server**

        -   **World spawn path** is now set in the server settings under **Content > Paths**

    -   **Bug fixes**

        -   Installing Tivoli will **install dependencies that were missing** on some machines
        -   **Switching audio devices** doesn't crash you anymore
        -   Fixed exploit where you can edit entities without create rights
        -   **Game loop rate** and **bypass priority** are available in stats now (press /)
        -   Removed annoying uploading to asset server message that was creepy and weird
        -   Fixed scrollbars that were missing

## 0.3.0 - January 21, 2020

-   **Zone culling cull all entity types** and transitions faster
-   **Entities load faster when you connect** by temporarily disabling their render priority
    <br><br>
-   **Web entities** have a higher frame rate by default
-   **Explore** uses a brand new panel format when in **VR**
-   **Explore** now shows the **currently connected world** down below
-   **Exploreloads instantaneously** when you open it
    <br><br>
-   **Launcher has a disable VR button** next to the launch button

## 0.2.0 - January 17, 2020

-   **Frame rate** has been significantly improved
-   **Zone culling** performance has improved
-   **Zone culling** labels are easier to understand
-   **Tablet** size/distance are back to normal
-   **Mic button** at the top left is ensured to show
    <br><br>
-   Improved developer UI for **launcher**

## 0.1.0 - January 9, 2020

-   Initial release!
