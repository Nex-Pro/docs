# Changelog

## 0.9.1 - June 9, 2020

-   **tivoli.link is now available** for sharing worlds! Visit **My Worlds** and copy your world link
    <br><br>
-   **Crashes are now sent to our servers** so we can quickly fix bugs and improve stability
-   When errors occur in the launcher, they'll be shown instead of ignored
    <br><br>
-   **Default rotation and position** of newly created entities now face you
-   Added **Reload Page** to web entity properties
    <br><br>
-   Updated to **Qt 5.15 LTS**
-   JavaScript **objects will now print correctly** in the console
-   Fixed **Settings > Custom Shaders on Models** menu button
-   Model origins `registrationPoint` can now be outside of the model's bounding box
-   Added `sendToQml` function and `fromQml` signal to web entities

## 0.9.0 - May 20, 2020

**Protocol update!** You'll need to update your servers too.

-   New work in progress **Market app** where you can find avatars
-   See **interface logs in the launcher** with button to copy to clipboard
-   **Key bindings are now visible** in all menus
-   Rebranded to **early access**
    <br><br>
-   Servers can now use **full automatic networking** with ICE protocol
-   Fixed bug where **snaps were incorrectly named**
-   On macOS, **window will be full screen** on startup now
    <br><br>
-   We've moved all CDN content to Google Cloud so **expect much faster downloads**
-   Lots of other backend changes readying for our public release!

## 0.8.2 - May 10, 2020

-   Fixed bug where you could be in third person in VR
-   Reverted laser pointers back to older design for now

## 0.8.1 - May 9, 2020

-   Fixed **tablet which broke from last update**
-   Updated **the toolbar and tablet fonts** to be condensed
-   Updated **the tablet** user interface

## 0.8.0 - May 9, 2020

-   **Tivoli for Linux** is now available! As an **AppImage, deb and arch package**
    <br><br>
-   Brand new **default avatar called Lynden** (inspired from [Devs](https://www.imdb.com/title/tt8134186)), unique per person
    -   New button in **avatar app** that will let you randomize colors
-   Lots of **user interface updates** to fit our design language
    -   Updated **the toolbar at the bottom** with new colorful buttons
    -   Updated **the window frames**
    -   Updated **the icons**
-   New **default skybox** to be a pretty colorful aurora
-   New **menu buttons**
    -   **Settings > Use Avatar Placeholders** will stop rendering avatar models
    -   **Settings > Custom Shaders on Models** which is enabled by default
    -   **Developer > Tivoli Options > Stop Rendering**
    -   **Edit > Reload Avatar**
        <br><br>
-   Fixed **secondary camera being too dark** on mirrors or spectator camera
-   Fixed **avatars resetting when changing worlds** _...thank goodness finally_
-   Fixed **reload model button** on model entities
-   Fixed **flipped normals on double sided geometry** -- [thank you HifiExperiments](https://git.tivolicloud.com/tivolicloud/interface/-/commit/f817e7af46232826c21b5e4db9414a0985ada701)
-   Fixed **default spawn location** for new users, now at Silence
-   Fixed **default camera not set to third person**
-   Fixed current version not showing on [https://apidocs.tivolicloud.com](https://apidocs.tivolicloud.com)

## 0.7.2 - April 22, 2020

-   New **private tab in explore** where you can find worlds you have access to
    <br><br>
-   Fixed window **not centering on macOS**
-   Fixed **disable vr** showing in launcher when using unsupported platform
-   Fixed **reloading and searching** in explore menu
-   Fixed **default world for new users**. They will spawn at Silence now

## 0.7.1 - April 21, 2020

-   **Fixed the macOS version** from crashing. This was a silly mistake of us
-   **Anti-aliasing is permanently disabled** until it's fixed

## 0.7.0 - April 17, 2020

-   **Tivoli for macOS** is now available!
    <br><br>
-   **Updated all fonts!** This is so lovely because it's now consistent
-   **Removed all ugly gradients!** Buttons with gradients don't fit in
-   **Started fixing capitalization** on buttons and text
-   Added **supersampling up to 5x** in the performance settings
    <br><br>
-   Updated the **performance settings** which needs major redesigning regardless
    -   _There's now a **potato** option..._
-   Experimental **"reload model"** button on model entities
-   Experimental **disable custom shaders** option
-   Experimental **disable bone flow** option
-   Experimental **force unlit** option
-   Experimental **fast refresh scene** button
    <br><br>
-   Fixed a bug where **glb models** weren't being loaded
-   Fixed the bug where a **white rectangle always appears** at 0,0,0
-   Fixed old broken links in the menus
-   Green loading cube is now a Tivoli colored cube!

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
