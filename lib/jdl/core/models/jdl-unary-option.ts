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

import { join } from '../utils/set-utils.js';
import AbstractJDLOption from './abstract-jdl-option.js';

/**
 * For flags such as skipServer, skipClient, etc.
 */
export default class JDLUnaryOption extends AbstractJDLOption {
  getType(): string {
    return 'UNARY';
  }

  toString(): string {
    const entityNames = join(this.entityNames, ', ');
    entityNames.slice(1, entityNames.length - 1);
    const firstPart = `${this.name} ${entityNames}`;
    if (this.excludedNames.size === 0) {
      return firstPart;
    }
    const excludedNames = join(this.excludedNames, ', ');
    excludedNames.slice(1, this.excludedNames.size - 1);
    return `${firstPart} except ${excludedNames}`;
  }
}
