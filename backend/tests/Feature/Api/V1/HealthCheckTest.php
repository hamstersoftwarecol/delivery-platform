<?php

declare(strict_types=1);

namespace Tests\Feature\Api\V1;

use Tests\TestCase;

final class HealthCheckTest extends TestCase
{
    public function test_it_reports_that_the_api_is_healthy(): void
    {
        $this->getJson('/api/v1/health')
            ->assertOk()
            ->assertJsonPath('data.service', 'delivery-api')
            ->assertJsonPath('data.status', 'ok')
            ->assertJsonPath('data.version', 'v1')
            ->assertJsonStructure(['data' => ['timestamp']]);
    }
}
