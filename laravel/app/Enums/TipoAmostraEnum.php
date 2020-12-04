<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class TipoAmostraEnum extends Enum
{
    const URINA = 'urina';
    const SANGUE = 'sangue';
}
