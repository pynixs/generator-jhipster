/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { before, describe, it } from 'esmocha';
import { expect } from 'chai';
import { createJDLApplication } from '../models/jdl-application-factory.js';
import { applicationTypes } from '../built-in-options/index.js';
import { getDefaultRuntime } from '../runtime.js';

const { MONOLITH, MICROSERVICE, GATEWAY } = applicationTypes;

const runtime = getDefaultRuntime();

describe('jdl - JDLApplicationFactory', () => {
  describe('createJDLApplication', () => {
    describe(`when passing a ${MICROSERVICE} config`, () => {
      let application;

      before(() => {
        application = createJDLApplication({ applicationType: MICROSERVICE }, undefined, runtime);
      });

      it('should create the app', () => {
        expect(application.getConfigurationOptionValue('applicationType')).to.equal(MICROSERVICE);
      });
    });
    describe(`when passing a ${GATEWAY} config`, () => {
      let application;

      before(() => {
        application = createJDLApplication({ applicationType: GATEWAY }, undefined, runtime);
      });

      it('should create the app', () => {
        expect(application.getConfigurationOptionValue('applicationType')).to.equal(GATEWAY);
      });
    });
    describe(`when passing a ${MONOLITH} config`, () => {
      let application;

      before(() => {
        application = createJDLApplication({ applicationType: MONOLITH }, undefined, runtime);
      });

      it('should create the app', () => {
        expect(application.getConfigurationOptionValue('applicationType')).to.equal(MONOLITH);
      });
    });
  });
});
