<?php namespace AlexLit\BrowserDetector;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{

    public function pluginDetails()
    {
        return [
            'name'        => 'Browser Detector',
            'description' => 'Detecting a user\'s browser name and version',
            'author'      => 'Alexey Litovchenko',
            'icon'        => 'icon-eye',
            'homepage'    => 'https://web2easy.ru'
        ];
    }

    public function registerComponents()
    {
        return [
           '\AlexLit\BrowserDetector\Components\BrowserDetector' => 'browserDetector'
        ];
    }

    public function registerSettings()
    {
    }
}