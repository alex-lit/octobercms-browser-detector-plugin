<?php namespace AlexLit\BrowserDetector\Components;

use Cms\Classes\ComponentBase;

class BrowserDetector extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'alexlit.browserdetector::lang.plugin.name',
            'description' => 'alexlit.browserdetector::lang.plugin.description'
        ];
    }

    // public function defineProperties() {}

    public function onRun()
    {
        $this->addJS('assets/scripts/bowser.min.js');
        $this->addJS('assets/scripts/browser-detector.js');
    }
}
