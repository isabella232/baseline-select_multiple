# Baseline select_multiple field

![Default appearance for the 'baseline-select_multiple' field plug-in](extras/preview.jpg)

## Description

A simple replacement for the default select_multiple field. Use this as a starting template when creating your own select_multiple field plug-in.

[![Download now](extras/download-button.png)](https://github.com/surveycto/baseline-select_multiple/raw/master/baseline-select_multiple.fieldplugin.zip)

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `select_multiple`|
| Default values | Yes |
| Custom constraint message | Yes |
| Custom required message | Yes |
| Read only | Yes |
| media:image | Yes |
| media:audio | Yes |
| media:video | Yes |
| `minimal` appearance | No |
| `compact` appearance | No |
| `compact-#` appearance | No |

## Expanded feature support

In addition to supporting the default SurveyCTO features listed above, this field plug-in offers the following expanded functionality:

1. Support for RTL languages in choice labels  
    If your choice labels are in a language that uses a right-to-left alphabet (like Arabic), the choices will be right-justified, with the checkboxes to the right of the choice labels. If your form contains both right-to-left and left-to-right choice labels, the formatting will respond to the currently-selected form language.
1. Support for HTML in choice labels  
    This plug-in will allow HTML in choice labels to be rendered as HTML, even in Collect on Android and iOS.

## How to use

**To use this plug-in as-is**, just download the [baseline-select_multiple.fieldplugin.zip](baseline-select_multiple.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.

    * **Note:** be sure to update the `manifest.json` file as well.

1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

## More resources

* **Test form**  
You can find a form definition in this repo here: [extras/test-form](extras/test-form). This form will help you compare your select_multiple field plug-in to the default select_multiple field. [Click here for instructions](/extras/test-form/README.md).

* **Developer documentation**  
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
