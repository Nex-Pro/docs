# Changelog

## 0.17.0 - January 9, 2020

**Happy new year from everyone at Tivoli!** 🎉🎈

This update is an exciting start to the year with some courageous new features.

The biggest feature today is the addition of [**assimp**](https://github.com/assimp/assimp), a **multi-format 3D model importing** library!

-   **glTF models now use assimp** and support **armatures!**
    -   This means we can use the **Ready Player Me avatar creator** which will be available for testing in the **things app**. Please try it out! It may not work well in VR yet.
    -   A couple things may still be broken such as animations, joints and vertex colors
    -   Draco decompression will be support soon which is already available in Blender
-   Assimp will **automatically optimize 3D models** when importing, in ways such as:
    -   **Joining identical vertices** to reduce draw calls and GPU memory
    -   **Find identical meshes and instance them** which will reduce GPU memory and work
    -   **Splitting large meshes** every 1 million vertices/faces to optimize large meshes
    -   **Improve cache locality** which will optimize rendering on modern hardware
-   Lots of **other 3D file formats** are supported too now, such as:<br>
    .3ds, .blend (2.79, soon 2.9), .dae, .ply, .stl, and many [more available here](https://github.com/assimp/assimp/blob/master/doc/Fileformats.md)

Another feature is the addition of [**libsndfile**](https://github.com/libsndfile/libsndfile), a **multi-format audio parsing** library!

-   Lots of **audio file formats** are supported now such as:<br>
    .mp3, .ogg, .flac, .aiff and [more available here](https://github.com/libsndfile/libsndfile/blob/v1.0.30/src/command.c#L122)
-   **All .wav files are supported now** so no need to export with exact settings
-   **.mp3 files** don't have the **annoying crackling** sound anymore!
-   It's now possible to **use flac for losslessly compressed ambisonic sound**

Then we have two lovely updates from **FluffyJenkins** and **Humbletim**:

-   **The secondary camera has new properties** on [**`Camera`**](https://apidocs.tivolicloud.com/Camera.html) such as `parentID`, `parentJointIndex`, `localPosition`, `locationRotation`
-   **Enhancements to avatar parenting** adds new properties to [**`MyAvatar`**](https://apidocs.tivolicloud.com/MyAvatar.html) such as `localPosition`, `localRotation`, `localVelocity` and more
-   All of these changes are little contributions to getting vehicles to work! Thank you~ ❤️

General changes to **interface**:

-   Added **show self for nametags** in the graphics settings
-   Added **brotli decompression** to http and tea requests
    -   If you upload a `.br` or `.gz` file to Tivoli files, accessing it through the url without the compressed extension will serve the compressed version if available.
-   Made sure the **settings menu is correctly scaled in VR**

Changes to **chat**:

-   Added **text to speech for macOS**
-   Added **/tp command** to teleport to people in-world
-   Made sure the **time/date of messages** always appear
-   Added **video embedding** to chat when you post .mp4 or .webm urls
-   **Improved scrolling** through the chat history

## 0.16.2 - December 20, 2020

-   Updated to **Qt 5.15.2** which **fixes the recent web related crashes**
-   Avatars will **properly save** when selected from the **things app**
-   Your cursor will **update with web entities/overlays** when in desktop
-   When **selecting a file**, it'll now use the **native system file picker**

Graphics changes:

-   Dramatically **improved ambient occlusion** and added it to the graphics settings
-   Added **far clip** to the graphics settings and in the API as [`Render.farClip`](https://apidocs.tivolicloud.com/Render.html#.farClip)
-   Added **unlit** to [procedural fragment shaders](/shaders/shader-api-reference)

Other fixes:

-   Fixed the **things app randomly zooming in** when in VR
-   Fixed the **tab menu accidentally appearing** on launch
-   Fixed **"Find an avatar here!" button** in the avatar app
-   Fixed **URLs in chat when pasting** them from the new Microsoft Edge

## 0.16.1 - December 8, 2020

A small patch with some good changes!

-   Possibly **fixed the create tools crashes!** Together with **controller scripts**, we separated them to different threads which seems to resolve many crashes
-   Fixed the **macOS version**. Qt 5.15.1 had introduced an unexpected bug
-   Changed the **default field of view** to **120 degrees** horizontal
-   Fixed some issues with **metallic and roughness** being ignored for **fbx models**
-   When connecting to IP addresses instead of worlds, properly reset the title bar

## 0.16.0 - December 4, 2020

It's been 2 months since the last update. Thank you for waiting so patiently. There are some exciting changes in this version! Starting with the...

**Initial release of the things app** where you can find all kinds of **avatars**, **scripts** and **entities!** Currently maintained on the [things repo on our GitLab](https://git.tivolicloud.com/tivolicloud/things), it'll replace the market app for now. When tea:// content protection and inventory are implemented, we can start working on a real marketplace in the future.

General changes to **interface**:

-   Updated **position and rotation of tablet** when opening it in VR
-   Added **horizontal field of view** to the graphics settings. Default has changed from **80 to 90** degrees.
-   Added **time and date tooltip** to chat messages
-   Added **"allows anonymous users"** warning in **explore menu**
-   Added **reconnect button** to the **explore menu** which is slightly faster now

Changes to **entities**:

-   Added **linear interpolation to animations** on model entities so you can smoothly play them at a sloooooow speeeed
-   Added **billboard mode** to shape entities. Use in **user data** with **`{"billboardMode": "yaw"}`**
-   Added **3D side by side support** to web entities. Use in **user data** with **`{"sbs": true}`**
-   Fixed **boolean uniforms for procedural shaders**
-   Fixed **material names in glTF** which was a problem when using **`materialMap`** in an **`.fst`** file
-   Added support for **metallic, roughness and emissive to multiply its texture**. This makes models more compliant to the glTF spec. _Hooray no more fully metallic glTF models!_

Changes to **scripting**:

-   Fixed **loading scripts with tea://**
-   Added **TIVOLI_SCRIPT_DEBUG** environment flag which adds a **Script Debug** menu
-   Added **local file change detection** to bust script cache - [thanks humbletim](https://github.com/kasenvr/project-athena/pull/848)
-   Fixed **`enterEntity` not firing** after content reload - [thanks ctrlaltdavid](https://git.tivolicloud.com/tivolicloud/interface/-/commit/5f3e0eb3f306206eb4c8e9d0f100893cba0a7fa3)
-   Fixed **[`Selection`](https://apidocs.tivolicloud.com/Selection.html) API** which fixes outlines in the create tools

Changes to the **world server**:

-   Added **spawn radius** which you can set in **Content > Paths**
-   Added **auto updating**. Find out how to enable it on [the worlds hosting guide](/worlds/host-a-world-advanced/#2-structuring-your-configuration)
-   Improved **server Docker image** from **2.1 GB to 1.1 GB**

Others **changes**:

-   Added **Spacemouse** support for **Linux** with [included example script](https://git.tivolicloud.com/tivolicloud/interface/-/blob/main/plugins/spacemouse-linux-plugin/spacemouseCamera.js)
-   Updated to **Qt 5.15.1**

## 0.15.0 - October 20, 2020

There's a **server protocol change!** You'll have to update your world(s).

<img style="height: 120px" src="/assets/tea.svg"/>

**tea:// protocol is now available!**

-   Please try it out and let us know what you think! You can copy **tea:// links from your Tivoli files** or select an avatar from the avatar app.

**Performance updates** that make things feel faster!:

-   Improved performance of **entity updates** - [thanks HifiExperiments](https://github.comkasenvr/project-athena/pull/276)
-   Improved performance of **pick rays** significantly
-   Local entities get **higher priority updates** now
-   VR hand lasers also get **higher priority updates**
-   Added an option to set **maximum texture memory** in graphics settings

Other changes to **interface**:

-   **Avatar entities** are working a lot better now so we can do attachments!
-   Static entities are converted to automatic when cloned
-   Added open in external browser to in-world browser (<kbd>CTRL</kbd> + <kbd>B</kbd>) - thanks ctrlaltdavid

Bug fixes to **interface**:

-   Fixed a crash **when switching audio output**
-   Fixed bug where **procedural shaders** get applied to other entities
-   Added **login/logout buttons** when not using the launcher
-   Removed **"customTags"** which were all over the entities json
-   Avatar URL was moved to another more reliable packet
-   Removed old graphics menu

## 0.14.2 - September 23, 2020

**Using Tivoli on macOS with an AMD graphics card is now fixed!**

If you were having problems with you Mac, this version may likely work. If not, please let us know so we can try to figure out the issue.

Other changes:

-   Reverted laptop touch pad controls update from 0.14.0

## 0.14.1 - September 21, 2020

This is a very small patch where:

-   The **world server has been fixed** and you can now update
-   Increased physics network update speed for smoother physics

## 0.14.0 - September 20, 2020

This update has some changes that make **Tivoli feel a lot faster!** The two most important are:

-   You can now **immediately move around** when you join a world. There's a **"ghosting"** property for **zone entities** where you can disable this.
-   Assets are now **cached to the disk** so you **don't have to download everything every time**. You can resize or move it's location in the new settings menu.

We can't wait for you to try it and let us know what you think!

General changes to **interface**:

-   Added **new settings menu** which is going to unify everything together! It's still work in progress and doesn't include everything yet, but it already has some new settings.
-   Added **nametag settings** where you can customize your display name or set your pronouns.
-   Enabled **SL style insProtocol changepect** by default. Hold <kbd>Alt</kbd> and right mouse click to look around.
-   Disabled **loading things** at the bottom of the screen since the caching and ghosting makes it feel unnecessary.

Changes to **entities**:

-   Fixed **blendshapes for glTF** - [thanks ctrlaltdavid](https://git.tivolicloud.com/tivolicloud/interface/-/commit/f1d0652402a714d289144a7aa63f2f03e878d64b)
-   Added **"none"** to **web entity input modes** which won't capture any user input.
-   Hopefully the create tools might crash less.

Changes to **chat**:

-   You can **send code in chat** by wrapping your message like this **&#96;&#96;&#96;console.log("Hi!")&#96;&#96;&#96;**

Changes to the **scripting API**:

-   Added **[`Reticle.enabled`](https://apidocs.tivolicloud.com/Reticle.html#.enabled)** variable
-   Added **[`Chat.messageSent`](https://apidocs.tivolicloud.com/Chat.html#.messageSent)** signal

Bug fixes to **interface**:

-   Flipped laptop touch pad controls to feel more natural.
-   Disabled drag and dropping files into the window to upload to atp which kept happening by accident.
-   Fixed bug where overview overlay (hold <kbd>Tab</kbd>) could accidentally capture all input.
-   Fixed bug where nametags could block your input.

Tivoli is now also available on the **Arch User Repository** under **[`tivoli-cloud-vr-bin`](https://aur.archlinux.org/packages/tivoli-cloud-vr-bin)**

## 0.13.2 - August 31, 2020

General changes to **interface**:

-   **Zone culling works now!** and can be used in your worlds
-   **Disabled all smoothing** for trackers and controllers in VR
-   When loading worlds, **your avatar won't be stuck as long** as before
-   Optimizations to **render pipeline**, things should **feel snappier now**
-   Fixed bug causing **certain entities** to **intermittently not render**
-   Fixed **Valve Index not detecting SteamVR trackers** - [thanks Fluffy](https://git.tivolicloud.com/tivolicloud/interface/-/commit/52b35576b0efb19096f7a1fe0d3764c1088ae0d1)
-   **Parenting entities to your avatar** is not as laggy anymore - [thanks HifiExperiments](https://git.tivolicloud.com/tivolicloud/interface/-/commit/d52c15329e7f2ba1409a537346975695cb215157)
-   Fixed lag when you start Tivoli with a scaled avatar - [thanks HifiExperiments](https://git.tivolicloud.com/tivolicloud/interface/-/commit/ee756f12b444492b71e490d85bc61485a55b6316)

Changes to **interface chat**:

-   You can **select text** now and a **scrollbar** has been added
-   Use **up and down arrows** to view your own **chat history**
-   When **sending URLs** you'll see **info about the site**, for example: YouTube video title and description or thumbnail of an Instagram image
-   Added <kbd>/</kbd> shortcut to **open chat with a command** and moved stats menu to <kbd>F3</kbd>

Changes to the **scripting API**:

-   Added **[`btoa`](https://apidocs.tivolicloud.com/global.html#btoa)** and **[`atob`](https://apidocs.tivolicloud.com/global.html#atob)** to convert **text to base64 and back**.
-   Added **[`request`](https://apidocs.tivolicloud.com/global.html#request)** to make **easier HTTP requests** than using XMLHttpRequest
-   Added **[`Chat.messageReceived`](https://apidocs.tivolicloud.com/Chat.html#.messageReceived)** signal
-   Enabled **[`Test`](https://apidocs.tivolicloud.com/Test.html)** namespace which has always been available

## 0.13.1 - August 19, 2020

Fixed **critical rendering and framerate** bugs.<br>
Occlusion with GLTF sadly won't work again.

Sorry for the inconvenience.

## 0.13.0 - August 18, 2020

Yay, a new version of Tivoli! This version has lots of updates!

There's a **protocol change!** You'll have to update your server(s).

Changes to **interface create tools**:

-   Added **transparent background** property to web entities
-   Added **clone grabbable** property to all entities
-   Added button to **teleport your avatar** to selected entities
-   As well as **teleport selected entities** to your avatar
    <br>
-   **Occlusion textures** should now import with GLTF models
-   Hopefully **fixed some crashes** whilst using the create tools

Changes to the **launcher**:

-   **World server** is now available for **Windows** in the launcher!<br>
    Enable under **"Settings > General > Enable local world server"**
-   Added **"Open Tivoli interface"** to the tray menu
-   When updates fail, there's now a fallback button to manually download

Changes to the **scripting API**:

-   Added **`Camera.disableLookAt`** which will let your camera rotate with your avatar
-   Added **`About.platform`** which returns `"Tivoli Cloud VR"` for interoperability with forks
-   Added new **[Chat](https://apidocs.tivolicloud.com/Chat.html)** namespace where you can add your own commands _(yay for cli!)_

Changes to **interface chat**:

-   Added **text to speech** support to **Linux** with `festival`
-   **Don't speak urls** when they're in your message
-   Added **new line support** with <kbd>Shift</kbd> + <kbd>Enter</kbd>

General changes to **interface**:

-   You should be able to **grab things with two hands** in VR again
-   Fixed **H264 with WebRTC** for livestreaming on Windows
-   Lowered **minimum Linux** distro to **Ubuntu 18.04**
-   Updated explore so **only compatible protocols** appear
-   Added experimental **"Developer > Tivoli Options > Bypass Script Engine Throttling"** which can possibly speed up scripts
-   Fixed bug where web entities had access to your microphone in order to fix audio not coming through Oculus headsets. **Microphone and camera permission will always be strictly requested and never automatically allowed.**

General fixes to **interface**:

-   Fixed bug where some **entities randomly don't render**
-   Fixed **entities showing in-world** when they're **meant to be gone**
-   Fixed some AMD issues. **Display-based FPS** will now use **60 FPS minimum**
-   Fixed toolbar/tablet button labels not showing the correct font

## 0.12.0 - August 4, 2020

-   Added **Squirrel Nut Cafe** content to the game files so it loads **instantly**. Never wait ever again!
-   Added **antialiasing settings** to the graphics menu with: **None, TAA or FXAA**
-   Added **nametags toggle** to graphics. Snap app can now also **temporarily disable** them
-   Added **more properties to entities** like, opacity, text font/effect, billboard mode and web input mode
-   Added **/tts** and **/ttstoggle** to chat which currently only works on Windows
-   Added **lock icon to window title** when in a **private world**
    <br><br>
-   Updated **SteamVR/OpenVR** with 2 years of updates which may help with **Valve Index** or **Pimax**
-   Updated **Oculus VR** as well which may improve performance
-   **Experimental Linux VR** support with **SteamVR/OpenVR**
    <br><br>
-   Unlimited FPS has been updated to **Display-based FPS** so you don't render more than necessary
-   It's now possible to **load urls relatively** when **importing entities from JSON**. The [blender tools](blender-tools/host-a-world) are now much easier to use
-   Fixed loading external QML with `tablet.loadQMLSource`

## 0.11.0 - July 27, 2020

**AMD graphics cards now work which won't crash on startup anymore!**<br>
I'm so happy because this has been an annoying bug stopping people from even trying Tivoli.
<strike>This bug fix also applies to macOS users with AMD gpus.</strike>

Edit 1: The AMD bug is not fixed on macOS and we're really sorry. More research will be done as soon as possible.

Edit 2: THE **INVISIBLE AVATAR BUG IS FIXED!** For the few people whose avatar wasn't coming through, it's now fixed!

-   Fixed **online users disappearing** in explore
-   Fixed **scrolling in explore** when in VR
-   Updated **mic bar to be horizontal** so it's more obvious when you're muted or not
-   Added **"Import Entities from URL"** to the create menu
-   Added **keyboard shortcut for reconnecting** using <kbd>CTRL</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>
-   Fixed **audio crackling for arm64 servers** such as Raspberry Pi
-   Disabled crashy context menu appearing in any web overlay or entity

Changes to **in-world chat**

-   **Links and images** are now **clickable** when focused
-   Added **/me** command to talk in third person
-   Fixed **scrolling** through the chat history
-   Unfortunately chat is **not compatible** with **0.10.5 or older**

## 0.10.5 - July 16, 2020

The **auto updater will not work** for this version!
<br>
Download **Tivoli** from **[https://tivolicloud.com](https://tivolicloud.com)**
<br>
We're sorry for the inconvenience

-   Changed the **default world** to **Squirrel Nut Cafe**
-   Added **background and animations** to chat
-   Fixed **joined/left without usernames** in chat
-   Fixed **low resolution textures**
-   Added **unlimited FPS** option in graphics which is default
-   **Disabled vsync** to decrease input latency
-   Renamed performance menu to **graphics menu**
-   Added **F11** shortcut to **toggle fullscreen**
-   Shadows are now enabled by default
-   And another fix... Make sure to **update your server!** <span style="font-size: 0.6em">...expect the **audio to sound better**...</span>

## 0.10.4 - July 11, 2020

Tivoli server will now run on arm64 such as **Raspberry Pi** and **Android!**

-   Added **new overview** accessible by **holding down tab**
    -   Will show **where you are**, **players nearby**, **ping** and **draw calls**
-   When joining a world, you'll now **appear at the correct location**
-   Audio from **web entities** now **output through your selected device**
-   **Maximum texture size** is now set to **8192 x 8192**
-   **Audio menu** was reorganized

## 0.10.3 - July 4, 2020

-   Fixed **accidental right mouse clicking** on the chat when moving the camera

Changes to the **launcher**

-   **Tray icon works properly** now on Windows
-   **Launcher will open** when you run it again
-   Fixed changelog tab

## 0.10.2 - July 4, 2020

-   Fully fixed bug where **anyone could edit unlocked entities**
    -   You don't have to lock your entities anymore to avoid griefing
    -   Update your server to make sure that it's in effect
-   **Completely recreated chat** with emojis, images, commands and join/leave messages
-   Button to pick **your avatar from your Tivoli files** in the avatar app

Smaller changes to **interface**

-   Disabled the shader cache **which was causing crashes** for some people
-   Hopefully fixed not being in **first person when in vr**

Changes to the **launcher**

-   Tivoli now has a **tray icon** so you don't close interface as easily
-   **Disabled "Waiting at the launcher..."** Discord rich presence
-   Ability to set additional environment variables in developer menu

## 0.10.1 - June 27, 2020

-   **Added scripts to market app** which will include lots of fun things soon
-   **Removed P shortcut** that used to take a snapshot
-   **Enabled autoplay** for audio or videos on web entities
-   **Shaders won't be applied** to other entities anymore
-   When downloading assets, **user agent will include `TivoliCloudVR/<version>`**

Changes to the **launcher**

-   Added **"Remove all settings" button** to reset Tivoli settings
-   **Fixed Windows installation failing** when changing install path
-   **Fixed copy and pasting** on macOS

## 0.10.0 - June 24, 2020

**This is the first public release of Tivoli!
<br>
Now fully available at [https://tivolicloud.com](https://tivolicloud.com)**

Just a couple of bug fixes

-   Shadows look better now as they have a longer distance
-   Textures will downscale at resolution 4096 instead of 2048

## 0.9.2 - June 18, 2020

-   **Fixed textures and models not loading** on Windows and macOS
-   Updated the **Enter/Leave VR** button with a non-glitchy icon
    <br><br>
-   Launcher now shows **version in window title**
-   Interface **launch errors are now properly shown** on the launcher
    <br><br>
-   Fixed a sudden crash when changing model URLs
-   Fixed reloading content in serverless worlds -- [thank you ctrlaltdavid](https://git.tivolicloud.com/tivolicloud/interface/-/commit/f2051e1d6df5efd72fa8a4bf0ab07b7ffbd839e4)

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
