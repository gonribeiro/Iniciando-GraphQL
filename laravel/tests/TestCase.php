<?php

namespace Tests;

use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use MarvinRabe\LaravelGraphQLTest\TestGraphQL;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use TestGraphQL;
}
