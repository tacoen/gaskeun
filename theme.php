<?php
namespace Grav\Theme;

use Gantry\Framework\Gantry;
use Gantry\Framework\Theme as GantryTheme;
use Grav\Common\Theme;
use RocketTheme\Toolbox\ResourceLocator\UniformResourceLocator;


class Gasken extends Theme
{
    public $gantry = '5.4.0';

    /**
     * @var GantryTheme
     */
    protected $theme;

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized' => ['onThemeInitialized', 0],
            'onAdminMenu' => ['onAdminMenu', 0],			
        ];
    }
   
    public function onAdminMenu()
    {
	
		if (isset($this->grav['theme']->config()['links'])) {
			
			foreach ($this->grav['theme']->config()['links'] as $key => $val) {

				$this->grav['twig']->plugins_hooked_nav[$key] = [
					'route' => "..".$val, 
					'icon' => 'fa-link'
				];
		
			}
		
		}
		
    }
	
    public function onThemeInitialized()
    {
        if (defined('GRAV_CLI') && GRAV_CLI) {
            return;
        }

        /** @var UniformResourceLocator $locator */
        $locator = $this->grav['locator'];
        $path = $locator('theme://');
        $name = $this->name;

        if (!class_exists('\Gantry5\Loader')) {
            if ($this->isAdmin()) {
                $messages = $this->grav['messages'];
                $messages->add('Please enable Gantry 5 plugin in order to use current theme!', 'error');
                return;
            } else {
                throw new \LogicException('Please install and enable Gantry 5 Framework plugin!');
            }
        }

        // Setup Gantry 5 Framework or throw exception.
        \Gantry5\Loader::setup();

        // Get Gantry instance.
        $gantry = Gantry::instance();

        // Set the theme path from Grav variable.
        $gantry['theme.path'] = $path;
        $gantry['theme.name'] = $name;

        // Define the template.
        require $locator('theme://includes/theme.php');

		$theme_uri = str_replace( $_SERVER['DOCUMENT_ROOT'], '', $locator('theme://'));

        if ($this->isAdmin()) {
			$assets = $this->grav['assets'];
			$assets->addCss($theme_uri.'/admin/poko.css', 1);
			$assets->addJs($theme_uri.'/admin/poko.js', 1);
		}



        $log_path     = $locator('log://popularity');
		$gantry['global']['stat_daily']=array_values((array)json_decode(file_get_contents($log_path . '/daily.json')))[0];
		$gantry['global']['stat_monthly']=array_values((array)json_decode(file_get_contents($log_path . '/monthly.json')))[0];
		$gantry['global']['stat_total']=array_values((array)json_decode(file_get_contents($log_path . '/totals.json')))[0];

/*		echo "<pre>";
		print_r($gantry);
		echo "</pre>";
*/
        // Define Gantry services.
        $gantry['theme'] = function ($c) {
            return new \Gantry\Theme\Gasken($c['theme.path'], $c['theme.name']);
        };
    }
}


