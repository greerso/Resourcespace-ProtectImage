# Disable Right Click Plugin for ResourceSpace

This plugin is designed for ResourceSpace to enhance image protection. It offers the following functionalities:

1. Disables the default right-click context menu on resource previews and thumbnails.
2. Replaces the right-click action with a custom context menu that displays ResourceSpace actions based on user permissions.
3. Ensures resource previews and thumbnails are only loaded if JavaScript is enabled, further securing images from being easily downloaded.

## Installation

1. Clone this repository into the `plugins` directory of your ResourceSpace installation.
2. Navigate to the ResourceSpace admin panel and activate the `disable_rightclick` plugin.
3. Configure the plugin if necessary through the ResourceSpace admin panel.

## Usage

Once installed and activated, the plugin will automatically apply its features to all resource previews and thumbnails. The default right-click context menu will be replaced by the custom one, and images will only load if JavaScript is enabled.

## Customization

You can customize the appearance of the custom context menu by modifying the `style.css` file located in the `css` folder.

## Contributing

1. Fork this repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE.txt` file for details.
