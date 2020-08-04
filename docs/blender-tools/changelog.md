# Changelog

Download the Tivoli Blender Tool here:
<br>
[https://git.tivolicloud.com/tivolicloud/blender-tools/-/releases](https://git.tivolicloud.com/tivolicloud/blender-tools/-/releases)

## 1.1.0 - August 4, 2020

-   When **exporting your scene to JSON, you don't need to enter your export URL** anymore. **Tivoli 0.12.0** can automatically figure out the assets next to the exported JSON.

-   Exporting light mapped scenes to JSON is more likely to work than before.

-   You can now **export avatars** through our addon!

    More features will be added soon to make this easier, such as automatically renaming bones and fixing bone rotations.

    ![Avatar tools](changelog/avatar-tools.png)

    -   **Add Tivoli armature** to import a reference armature

    -   **Add Tivoli settings node** to get extra settings for your materials

        When clicked, you can then add a node like this:

        ![Tivoli settings node](changelog/tivoli-settings-node.png)

    -   **Force/Clear T-Pose** to see if the bones look correctly before exporting

    When you're happy, export your avatar through the export menu and you'll have a folder that you can upload to [Tivoli files](https://files.tivolicloud.com) or your own webserver:

    ![Export avatar](changelog/export-avatar.png)

    Find more information about our rig at the [avatar standards](../../avatars/avatar-standards) page.

## 1.0.0 - July 28, 2020

Initial release!
