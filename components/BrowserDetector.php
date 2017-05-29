<?php namespace AlexLit\BrowserDetector\Components;

use Cms\Classes\ComponentBase;
use System\Classes\ApplicationException;

class BrowserDetector extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Browser Detector',
            'description' => 'Detecting a user\'s browser name, version, engine, device type and operating system'
        ];
    }

    // public function defineProperties() {}

    public function onRun()
    {
        $this->addJS('assets/scripts/bowser.min.js');
        $this->addJS('assets/scripts/browser-detector.js');
    }

}

?>